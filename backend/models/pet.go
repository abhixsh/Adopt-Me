package models

type Pet struct {
	ID           int     `json:"id"`
	Name         string  `json:"name" binding:"required"`
	Type         string  `json:"type" binding:"required"`
	Breed        string  `json:"breed" binding:"required"`
	Age          float64 `json:"age" binding:"required"`
	Gender       string  `json:"gender"`
	Size         string  `json:"size"`
	Location     string  `json:"location" binding:"required"`
	Description  string  `json:"description" binding:"required"`
	MainPhoto    string  `json:"main_photo" binding:"required"`
	ContactName  string  `json:"contact_name" binding:"required"`
	ContactPhone string  `json:"contact_phone" binding:"required"`
	ContactEmail string  `json:"contact_email" binding:"required"`
}
