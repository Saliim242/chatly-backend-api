export function createWelcomeEmailTemplate(name, clientURL) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Messenger</title>
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 650px; margin: 0 auto; padding: 20px; background-color: #f3f6f4;">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #064e3b, #0d9488); padding: 40px 30px; text-align: center; border-radius: 16px 16px 0 0;">
        <img src="https://img.freepik.com/free-vector/chat-bubble-icon-isolated_53876-118344.jpg" alt="Messenger Logo" style="width: 90px; height: 90px; margin-bottom: 20px; border-radius: 50%; background-color: white; padding: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
        <h1 style="color: #ffffff; margin: 0; font-size: 30px; font-weight: 600;">Welcome to Messenger</h1>
        <p style="color: #d1fae5; margin: 8px 0 0;">Your conversations, beautifully connected.</p>
      </div>
      
      <!-- Body -->
      <div style="background-color: #ffffff; padding: 35px; border-radius: 0 0 16px 16px; box-shadow: 0 6px 18px rgba(0,0,0,0.08);">
        <p style="font-size: 18px; color: #065f46; font-weight: 600; margin-top: 0;">Hello ${name},</p>
        <p style="font-size: 15px; color: #444;">We’re thrilled to welcome you to <strong>Messenger</strong> — the place where meaningful conversations begin. Connect instantly with your friends, family, and colleagues in a safe and simple way.</p>
        
        <!-- Steps -->
        <div style="background-color: #f0fdf4; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 5px solid #10b981;">
          <p style="font-size: 16px; margin: 0 0 15px 0; font-weight: 600; color: #065f46;">Get started in just 3 steps:</p>
          <ul style="padding-left: 20px; margin: 0; color: #333;">
            <li style="margin-bottom: 10px;">Set up your profile with a photo</li>
            <li style="margin-bottom: 10px;">Find and add your contacts</li>
            <li style="margin-bottom: 0;">Start chatting right away!</li>
          </ul>
        </div>
        
        <!-- Button -->
        <div style="text-align: center; margin: 35px 0;">
          <a href=${clientURL} style="background: linear-gradient(135deg, #065f46, #10b981); color: white; text-decoration: none; padding: 14px 35px; border-radius: 50px; font-weight: 600; display: inline-block; font-size: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">Open Messenger</a>
        </div>
        
        <p style="font-size: 14px; margin-bottom: 5px; color: #444;">If you need any help, our support team is always here to assist you.</p>
        <p style="margin-top: 0; font-size: 14px; color: #444;">We can’t wait to see the conversations you’ll create. 💬</p>
        
        <p style="margin-top: 25px; margin-bottom: 0; font-size: 14px; color: #333;">Cheers,<br><strong>The Messenger Team</strong></p>
      </div>
      
      <!-- Footer -->
      <div style="text-align: center; padding: 25px; color: #888; font-size: 12px;">
        <p style="margin: 0;">© 2025 Messenger. All rights reserved.</p>
        <p style="margin: 8px 0;">
          <a href="#" style="color: #065f46; text-decoration: none; margin: 0 8px;">Privacy Policy</a> |
          <a href="#" style="color: #065f46; text-decoration: none; margin: 0 8px;">Terms of Service</a> |
          <a href="#" style="color: #065f46; text-decoration: none; margin: 0 8px;">Contact Us</a>
        </p>
      </div>
    </body>
    </html>
    `;
}
