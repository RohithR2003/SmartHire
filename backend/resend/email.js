import { resend } from './config.js';
import { verificationTokenEmailTemplate, WELCOME_EMAIL_TEMPLATE } from './email-template.js'

export const sendVerificationEmail = async (email, verficationToken) => {
    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>", //important
            to: [email],  //free account signed up email
            subject: "Verify your Email Address",
            html: verificationTokenEmailTemplate.replace("{verificationToken}", verficationToken), 
          });
    } catch (error) {
        console.log("error sending verification email");
        throw new Error("Error sending verification email");
    }
}; 

export const sendWelcomeEmail = async (email, name) => {
    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>", //important
            to: [email],  //free account signed up email
            subject: "Welcome to SmartHire",
            html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name), 
          });
    } catch (error) {
        console.log("error sending Welcome email", error);
        
    }
}; 

export const sendPasswordResetEmail = async (email, resetURL) => {
    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>", //important
            to: [email],  //User email account
            subject: "Reset Your Password",
            html: `Click <a href="${resetURL}">here</a> to reset your password`, 
          });
    } catch (error) {
        console.log("error sending password reset email", error);  
    }
};

export const sendResetSuccessEmail = async (email) => {
    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>", //important
            to: [email],  //User email account
            subject: "Password Reset was Successful",
            html: `Your Password was reset successfully`, 
          });
    } catch (error) {
        console.log("error sending password reset successful email", error);
        
    }
};