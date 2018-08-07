import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:060516125855:deployPortfoliotopic')
    location = {
        "bucketName":'portfoliobuild.ajonline.info',
        "objectKey":'portfoliobuild.zip'
    }
    try:
        job = event.get("CodePipeline.job")

        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]

        print "Building Portfolio from" + str(location)

        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('portfolio.ajonline.info')
        build_bucket = s3.Bucket(location["bucketName"])

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location["objectKey"],portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                mime_type = mimetypes.guesstype(nm)[0]
                portfoliobucket.uploadfileobj(obj, nm,
                ExtraArgs={'ContentType': str(mime_type)})

                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        print "Job Done"
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio Deployed Successfully")
        if job:
            codepipeline = boto3.client("codepipeline")
            codepipeline.put_job_success_result(jobId=job["id"])
    except:
       topic.publish(Subject=" Deployed Failed Message", Message="The Portfolio was NOT Deployed Successfully")
       raise
    return 'Hello from Lambda'
