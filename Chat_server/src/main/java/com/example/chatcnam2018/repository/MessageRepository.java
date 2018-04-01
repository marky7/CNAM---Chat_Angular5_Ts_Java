package com.example.chatcnam2018.repository;

import com.example.chatcnam2018.model.Message;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
	@Query(value = "SELECT * FROM message m WHERE m.sender_id =:user OR m.receiver_id=:user ORDER BY created_at DESC Limit 20", nativeQuery=true)
	public List<Message> findMessagesOfConversation(@Param("user")Long userId);
	
	@Query(value = "SELECT * FROM message m WHERE (m.sender_id =:sender OR m.sender_id =:receiver) AND (m.receiver_id =:receiver OR m.receiver_id=:sender)", nativeQuery=true)
	public List<Message> findMessagesOfSenderAndReceiver(@Param("sender")Long senderId, @Param("receiver")Long receiverId);
}
