import smtplib
import getpass
def sendmail(mail,data):
    print(mail,data)


    HOST= "smtp-mail.outlook.com"
    PORT="587"

    # FROM_EMAIL="ashifvk@outlook.com"
    # FROM_EMAIL="abhinandtk123@outlook.com"
    # FROM_EMAIL="abhinandtk17@outlook.com"
    FROM_EMAIL="ashifvk503@outlook.com"
    TO_EMAIL=mail
    # PASSWORD="Ashif123"
    PASSWORD="Ashifvk@123"
    # PASSWORD="Abhinand.123"

    SUBJECT="FeedBack"
    BODY=data

    message=f"Subject:{SUBJECT}\n\n{BODY}"

    smtp=smtplib.SMTP(HOST,PORT)

    status_code,response=smtp.ehlo()
    print(f"[*]Echoing the server:{status_code}{response}")

    status_code,response=smtp.starttls()
    print(f"[*]Starting TLS connection:{status_code}{response}")

    status_code,response=smtp.login(FROM_EMAIL,PASSWORD)
    print(f"[*] Logging in:{status_code}{response}")

    
    smtp.sendmail(FROM_EMAIL,TO_EMAIL,message)

    smtp.quit()