package com.example.chatcnam2018.repository;

import com.example.chatcnam2018.model.Message;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
	@Query(value = "SELECT * FROM message m WHERE m.envoyeur_id =:envoyeur AND m.destinataire_id =:destinataire", nativeQuery=true)
	public Optional<Message> findMessagesByEnvoyeurEtDestinataire(@Param("envoyeur")Long envoyeurId, @Param("destinataire")Long destinataireId);
}
