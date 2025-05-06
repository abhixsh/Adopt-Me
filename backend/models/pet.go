package models

type Pet struct {
	ID             int    `json:"id"`
	Name           string `json:"name"`
	Type           string `json:"type"`
	Breed          string `json:"breed"`
	Age            string `json:"age"`
	Gender         string `json:"gender"`
	Size           string `json:"size"`
	Location       string `json:"location"`
	Description    string `json:"description"`
	MainPhoto      string `json:"main_photo"`
	ContactName    string `json:"contact_name"`
	ContactPhone   string `json:"contact_phone"`
	ContactEmail   string `json:"contact_email"`
}
