package com.ETE_Backend_wala.End_term_backend.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Allusers")
public class User {

    @Column(name = "name")
    public String Name;

    @Column(name = "Age")
    public Integer Age;

    @Id
    @Column(name = "email",unique = true)
    public String Email;

    @Column(name = "address")
    public String Address;

    @Column(name = "phone_number",unique = true)
    public Long Phone_number;

    public User() {
    }

    public User(String name, Integer age, String email, String address, Long phone_number) {
        Name = name;
        Age = age;
        Email = email;
        Address = address;
        Phone_number = phone_number;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public Integer getAge() {
        return Age;
    }

    public void setAge(Integer age) {
        Age = age;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public Long getPhone_number() {
        return Phone_number;
    }

    public void setPhone_number(Long phone_number) {
        Phone_number = phone_number;
    }

    @Override
    public String toString() {
        return "USErdetails{" +
                "Name='" + Name + '\'' +
                ", Age=" + Age +
                ", Email='" + Email + '\'' +
                ", Address='" + Address + '\'' +
                ", Phone_number=" + Phone_number +
                '}';
    }
}
