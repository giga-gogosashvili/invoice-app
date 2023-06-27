package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

type senderAddress struct {
	Street string `json:"street"`
}
type invoice struct {
	Id            string        `json:"id"`
	CreatedAt     string        `json:"createdAt"`
	SenderAddress senderAddress `json:"senderAddress"`
}

var invoices = []invoice{
	invoice{Id: "RT3080", CreatedAt: "2021-08-18", SenderAddress: senderAddress{Street: "xxx"}},
}

func main() {
	port := "9481"
	r := mux.NewRouter()

	r.HandleFunc("/invoices", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		json.NewEncoder(w).Encode(invoices)
	}).Methods("GET")

	r.HandleFunc("/invoices", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		decoder := json.NewDecoder(r.Body)
		var inv invoice
		err := decoder.Decode(&inv)
		if err != nil {
			fmt.Println("bad request")
		}

		invoices = append(invoices, inv)

		json.NewEncoder(w).Encode(inv)
	}).Methods("POST")

	r.HandleFunc("/invoices/{id}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
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
	}).Methods("GET")

	r.HandleFunc("/invoices/{id}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
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
	}).Methods("DELETE")

	r.HandleFunc("/invoices/{id}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

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
	}).Methods("PUT")

	log.Println("listening on", port)
	log.Fatal(http.ListenAndServe(":"+port, r))
}
