package domain

type AccountRepository interface {
	Save(account *Account) error
	FindByAPIKey(apiKey string) (*Account, error)
	FindByID(id string) (*Account, error)
	UpdateBalance(account *Account) error
}

type InvoiceRepository interface {
	Save(invoice *Invoice) error
	FindByID(id string) (*Invoice, error)
	FindByAccountID(accountId string) ([]*Invoice, error)
	UpdateStatus(invoice *Invoice) error
}
