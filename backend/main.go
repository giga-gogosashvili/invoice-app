package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"

	//ADDED:
	"github.com/rs/cors"
)

type senderAddress struct {
	Street   string `json:"street"`
	City     string `json:"city"`
	PostCode string `json:"postCode"`
	Country  string `json:"country"`
}
type clientAddress struct {
	Street   string `json:"street"`
	City     string `json:"city"`
	PostCode string `json:"postCode"`
	Country  string `json:"country"`
}
type items struct {
	Name     string  `json:"name"`
	Quantity float64 `json:"quantity"`
	Price    float64 `json:"price"`
	Total    float64 `json:"total"`
}
type invoice struct {
	Id            string        `json:"id"`
	CreatedAt     string        `json:"createdAt"`
	PaymentDue    string        `json:"paymentDue"`
	Description   string        `json:"description"`
	PaymentTerms  float64       `json:"paymentTerms"`
	ClientName    string        `json:"clientName"`
	ClientEmail   string        `json:"clientEmail"`
	Status        string        `json:"status"`
	SenderAddress senderAddress `json:"senderAddress"`
	ClientAddress clientAddress `json:"clientAddress"`
	Items         []items       `json:"items"`
	Total         float64       `json:"total"`
}

var invoices = []invoice{
	invoice{
		Id:           "RT3080",
		CreatedAt:    "2021-08-18",
		PaymentDue:   "2021-08-19",
		Description:  "Re-branding",
		PaymentTerms: 1,
		ClientName:   "Jensen Huang",
		ClientEmail:  "jensenh@mail.com",
		Status:       "paid",
		SenderAddress: senderAddress{
			Street:   "19 Union Terrace",
			City:     "London",
			PostCode: "E1 3EZ",
			Country:  "United Kingdom",
		},
		ClientAddress: clientAddress{
			Street:   "106 Kendell Street",
			City:     "Sharrington",
			PostCode: "NR24 5WQ",
			Country:  "United Kingdom",
		},
		Items: []items{
			items{Name: "Brand Guidelines", Quantity: 1, Price: 1800.9, Total: 1800.9},
		},
		Total: 1800.90,
	},
	invoice{
		Id:           "XM9141",
		CreatedAt:    "2021-08-21",
		PaymentDue:   "2021-09-20",
		Description:  "Graphic Design",
		PaymentTerms: 30,
		ClientName:   "Alex Grim",
		ClientEmail:  "alexgrim@mail.com",
		Status:       "pending",
		SenderAddress: senderAddress{
			Street:   "19 Union Terrace",
			City:     "London",
			PostCode: "E1 3EZ",
			Country:  "United Kingdom",
		},
		ClientAddress: clientAddress{
			Street:   "84 Church Way",
			City:     "Bradford",
			PostCode: "BD1 9PB",
			Country:  "United Kingdom",
		},
		Items: []items{
			items{Name: "Banner Design", Quantity: 1, Price: 156.00, Total: 156.00}, items{Name: "Email Design", Quantity: 2, Price: 200.00, Total: 400.00},
		},
		Total: 556.00,
	},
	invoice{
		Id:           "RG0314",
		CreatedAt:    "2021-09-24",
		PaymentDue:   "2021-10-01",
		Description:  "Website Redesign",
		PaymentTerms: 7,
		ClientName:   "John Morrison",
		ClientEmail:  "jm@myco.com",
		Status:       "paid",
		SenderAddress: senderAddress{
			Street:   "19 Union Terrace",
			City:     "London",
			PostCode: "E1 3EZ",
			Country:  "United Kingdom",
		},
		ClientAddress: clientAddress{
			Street:   "79 Dover Road",
			City:     "Westhall",
			PostCode: "IP19 3PF",
			Country:  "United Kingdom",
		},
		Items: []items{
			items{Name: "Website Redesign", Quantity: 1, Price: 14002.33, Total: 14002.33},
		},
		Total: 14002.33,
	},
}


func main() {
	port := "9481"
	r := mux.NewRouter()

	

	r.HandleFunc("/invoices", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type, YourOwnHeader")

		if r.Method == "OPTIONS" {
			return
		}
		json.NewEncoder(w).Encode(invoices)
	}).Methods("GET", "OPTIONS")

	r.HandleFunc("/invoices", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type, YourOwnHeader")
		if r.Method == "OPTIONS" {
			return
		}
		decoder := json.NewDecoder(r.Body)
		var inv invoice
		err := decoder.Decode(&inv)
		if err != nil {
			fmt.Println("bad request")
		}

		inv.Id = "RT" + strconv.Itoa(rand.Intn(10000))

		invoices = append(invoices, inv)

		json.NewEncoder(w).Encode(inv)
	}).Methods("POST")

	r.HandleFunc("/invoices/{id}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type, YourOwnHeader")
		if r.Method == "OPTIONS" {
			return
		}
		vars := mux.Vars(r)
		id, ok := vars["id"]
		if !ok {
			fmt.Println("id is missing in parameters")
		}

		for _, inv := range invoices {
			if inv.Id == id {
				json.NewEncoder(w).Encode(inv)
				return
			}
		}
		w.WriteHeader(404)
	}).Methods("GET", "OPTIONS")

	r.HandleFunc("/invoices/{id}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type, YourOwnHeader")
		if r.Method == "OPTIONS" {
			return
		}
		vars := mux.Vars(r)
		id, ok := vars["id"]
		if !ok {
			fmt.Println("id is missing in parameters")
		}

		for i, inv := range invoices {
			if inv.Id == id {
				invoices = append(invoices[:i], invoices[i+1:]...)
				json.NewEncoder(w).Encode(inv)
				return
			}
		}
		w.WriteHeader(404)
	}).Methods("DELETE", "OPTIONS")

	r.HandleFunc("/invoices/{id}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type, YourOwnHeader")
		if r.Method == "OPTIONS" {
			return
		}
		decoder := json.NewDecoder(r.Body)
		var newinv invoice
		err := decoder.Decode(&newinv)
		if err != nil {
			fmt.Println("bad request")
		}

		vars := mux.Vars(r)
		id, ok := vars["id"]
		if !ok {
			fmt.Println("id is missing in parameters")
		}

		for i, inv := range invoices {
			if inv.Id == id {
				invoices = append(append(invoices[:i], newinv), invoices[i+1:]...)
				json.NewEncoder(w).Encode(newinv)
				return
			}
		}
		w.WriteHeader(404)
	}).Methods("PUT", "OPTIONS")

	log.Println("listening on", port)

	// ADED
	c := cors.New(cors.Options{
		AllowedMethods: []string{"POST", "GET", "OPTIONS", "PUT","DELETE"},
        AllowedOrigins: []string{
			"http://localhost:3000", "http://localhost:9481" },
		AllowCredentials: true,
		Debug: true,

	})
		handler := c.Handler(r)
		log.Fatal(http.ListenAndServe(":"+port, handler))

    http.Handle(":9481", r)

	// log.Fatal(http.ListenAndServe(":"+port, r))

}