package dto

import (
	"time"

	"github.com/bantheus/gateway-pagamento/api-go/internal/domain"
)

const (
	StatusPending  = string(domain.StatusPending)
	StatusApproved = string(domain.StatusApproved)
	StatusRejected = string(domain.StatusRejected)
)

type CreateInvoiceInput struct {
	APIKey          string
	Amount          float64 `json:"amount"`
	Description     string  `json:"description"`
	PaymentMethod   string  `json:"payment_method"`
	CardNumber      string  `json:"card_number"`
	CardHolderName  string  `json:"card_holder_name"`
	CVV             string  `json:"cvv"`
	ExpirationMonth string  `json:"expiration_month"`
	ExpirationYear  string  `json:"expiration_year"`
}

type InvoiceOutput struct {
	ID             string    `json:"id"`
	AccountID      string    `json:"account_id"`
	Amount         float64   `json:"amount"`
	Status         string    `json:"status"`
	Description    string    `json:"description"`
	PaymentMethod  string    `json:"payment_method"`
	CardLastDigits string    `json:"card_last_digits"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
}

func ToInvoice(input CreateInvoiceInput, accountID string) (*domain.Invoice, error) {

	card := domain.CreditCard{
		Number:          input.CardNumber,
		CVV:             input.CVV,
		ExpirationMonth: input.ExpirationMonth,
		ExpirationYear:  input.ExpirationYear,
		CardHolderName:  input.CardHolderName,
	}
	return domain.NewInvoice(
		accountID,
		input.Amount,
		input.Description,
		input.PaymentMethod,
		card,
	)
}

func FromInvoice(invoice *domain.Invoice) InvoiceOutput {
	return InvoiceOutput{
		ID:             invoice.ID,
		AccountID:      invoice.AccountID,
		Amount:         invoice.Amount,
		Status:         string(invoice.Status),
		Description:    invoice.Description,
		PaymentMethod:  invoice.PaymentMethod,
		CardLastDigits: invoice.CardLastDigits,
		CreatedAt:      invoice.CreatedAt,
		UpdatedAt:      invoice.UpdatedAt,
	}
}
