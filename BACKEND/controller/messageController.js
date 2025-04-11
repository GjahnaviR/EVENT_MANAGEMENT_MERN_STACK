import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    console.log("Received message data:", { name, email, subject, message });
    
    if (!name || !email || !subject || !message) {
      console.log("Missing required fields");
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    console.log("Message saved successfully:", newMessage);

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error in sendMessage:", {
      error: error.message,
      stack: error.stack,
      body: req.body
    });
    res.status(500).json({
      success: false,
      message: "Error sending message",
      error: error.message,
    });
  }
};
