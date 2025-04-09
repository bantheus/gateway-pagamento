package dto

import (
	"time"

	"github.com/bantheus/gateway-pagamento/api-go/internal/domain"
)

type CreateAccountInput struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

type AccountOutput struct {
	ID        string  `json:"id"`
	Name      string  `json:"name"`
	Email     string  `json:"email"`
	Balance   float64 `json:"balance"`
	APIKey    string  `json:"api_key,omitempty"`
	CreatedAt string  `json:"created_at"`
	UpdatedAt string  `json:"updated_at"`
}

func ToAccount(input CreateAccountInput) *domain.Account {
	return domain.NewAccount(input.Name, input.Email)
}

func FromAccount(account *domain.Account) AccountOutput {
	return AccountOutput{
		ID:        account.ID,
		Name:      account.Name,
		Email:     account.Email,
		Balance:   account.Balance,
		APIKey:    account.APIKey,
		CreatedAt: account.CreatedAt.Format(time.RFC3339),
		UpdatedAt: account.UpdatedAt.Format(time.RFC3339),
	}
}
