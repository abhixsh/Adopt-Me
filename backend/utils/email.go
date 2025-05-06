package utils

import (
	"fmt"
	"net/smtp"
	"os"
)

func SendThankYouEmail(to string) {
	from := os.Getenv("SMTP_USER")
	pass := os.Getenv("SMTP_PASS")
	msg := "Subject: Thank you for subscribing!\n\nThanks for joining our newsletter. Stay tuned for updates!"

	err := smtp.SendMail(os.Getenv("SMTP_HOST")+":"+os.Getenv("SMTP_PORT"),
		smtp.PlainAuth("", from, pass, os.Getenv("SMTP_HOST")),
		from, []string{to}, []byte(msg))

	if err != nil {
		fmt.Println("Email send failed:", err)
	}
}
