package server

import (
	"net/http"

	"github.com/bantheus/gateway-pagamento/api-go/internal/service"
	"github.com/bantheus/gateway-pagamento/api-go/internal/web/handlers"
	"github.com/go-chi/chi/v5"
)

type Server struct {
	router          *chi.Mux
	server          *http.Server
	accounteService *service.AccountService
	port            string
}

func NewServer(accountService *service.AccountService, port string) *Server {
	return &Server{
		router:          chi.NewRouter(),
		accounteService: accountService,
		port:            port,
	}
}

func (s *Server) ConfigureRoutes() {
	accountHandler := handlers.NewAccountHandler(s.accounteService)

	s.router.Post("/accounts", accountHandler.Create)
	s.router.Get("/accountes", accountHandler.Get)
}

func (s *Server) Start() error {
	s.server = &http.Server{
		Addr:    ":" + s.port,
		Handler: s.router,
	}
	return s.server.ListenAndServe()
}
