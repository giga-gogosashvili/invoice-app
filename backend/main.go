package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"strconv"
)

type invoice struct {
	Id int `json:"id"`
}

var invoices = []invoice{
	invoice{Id: 1},
	invoice{Id: 2},
	invoice{Id: 3},
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

		idAsInt, _ := strconv.Atoi(id)
		for _, inv := range invoices {
			if inv.Id == idAsInt {
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

		idAsInt, _ := strconv.Atoi(id)
		for i, inv := range invoices {
			if inv.Id == idAsInt {
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

		idAsInt, _ := strconv.Atoi(id)
		for i, inv := range invoices {
			if inv.Id == idAsInt {
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
