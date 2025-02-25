// api/form-handler.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract form data from the request body
    const { Name, Email, Message } = req.body;

    // Perform any desired processing or validation here

    // Example: Log the form data
    console.log('Form Submission:', { Name, Email, Message });

    // Respond with a success message
    res.status(200).json({ message: 'Form submission successful' });
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
