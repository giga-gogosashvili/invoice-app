## Invoice service

1) Zainstauj go https://go.dev/doc/install
2) Uzyj `go run main.go`
3) wejdz w przegladarce na `localhost:9481/invoices`
4) endpointy:
- `GET /invoices`
- `POST /invoices`
- `GET /invoices/{id}`
- `PUT /invoinces/{id}`
5) curl
- `curl localhost:9481/invoices'`
- `curl -X POST localhost:9481/invoices -d '{"id": 4}'`
- `curl -X GET localhost:9481/invoices/1`
- `curl -X PUT localhost:9481/invoices/1 -d '{"id": 2}'`
