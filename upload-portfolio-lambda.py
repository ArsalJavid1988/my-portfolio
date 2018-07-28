import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:060516125855:deployPortfoliotopic')

    try:
        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('portfolio.ajonline.info')
        build_bucket = s3.Bucket('portfoliobuild.ajonline.info')

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip',portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm,
                ExtraArgs={'ContentType':'basestring'})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        print "Job Done"
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio Deployed Successfully")
    except:
       topic.publish(Subject=" Deployed Failed Message", Message="The Portfolio was NOT Deployed Successfully")
       raise
    return 'Hello from Lambda'
