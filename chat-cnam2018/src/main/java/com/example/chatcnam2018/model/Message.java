package com.example.chatcnam2018.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;

import java.io.Serializable;
import java.util.Date;
import com.example.chatcnam2018.model.User;

@Entity
@Table(name = "message")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Message implements Serializable {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
    @NotBlank
    private String contenu;

    @Digits(fraction = 0, integer = 6)
    private Long envoyeurId;
    
    @Digits(fraction = 0, integer = 6)
    private Long destinataireId;
    
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)	// modifier le type date pour correspondre au type mysql
    @CreatedDate
    private Date createdAt;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date updatedAt;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContenu() {
		return contenu;
	}

	public void setContenu(String contenu) {
		this.contenu = contenu;
	}

	public Long getEnvoyeurId() {
		return envoyeurId;
	}

	public void setEnvoyeurId(Long envoyeurId) {
		this.envoyeurId = envoyeurId;
	}

	public Long getDestinataireId() {
		return destinataireId;
	}

	public void setDestinataireId(Long destinataireId) {
		this.destinataireId = destinataireId;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
}