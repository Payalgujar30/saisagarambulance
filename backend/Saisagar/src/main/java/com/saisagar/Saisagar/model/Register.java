package com.saisagar.Saisagar.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Register {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name,address,mobileno,emailid,password;
	public Register() {
		super();
	}
	public Register(String name, String address, String mobileno, String emailid, String password) {
		super();
		this.name = name;
		this.address = address;
		this.mobileno = mobileno;
		this.emailid = emailid;
		this.password = password;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
