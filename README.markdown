# KKU IntelliSphere Chatbot

A React-based AI chatbot interface for Khon Kaen University, inspired by Grok, with Docker deployment.

## Folder Structure
```
kku-chatbot/
├── public/
│   ├── index.html        # Main HTML file
│   ├── favicon.ico       # KKU favicon
│   └── kku-logo.png      # KKU logo
├── src/
│   ├── components/
│   │   ├── ChatWindow.jsx # Chat display component
│   │   ├── Message.jsx    # Individual message component
│   │   └── InputBox.jsx   # User input component
│   ├── App.jsx           # Main React component
│   └── styles.css        # Custom CSS
├── Dockerfile            # Docker configuration
├── nginx.conf            # Nginx configuration
└── README.md             # This file
```

## Prerequisites
- Docker installed on your machine
- A KKU logo image (`kku-logo.png`) and favicon (`favicon.ico`) in `public/`
- Internet connection for CDN dependencies

## Setup
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd kku-chatbot
   ```

2. **Add Assets**:
   - Place `kku-logo.png` and `favicon.ico` in the `public/` folder.
   - Ensure the logo is a high-quality PNG of the KKU logo.

3. **Build the Docker Image**:
   ```bash
   docker build -t kku-chatbot .
   ```

4. **Run the Docker Container**:
   ```bash
   docker run -d -p 8080:80 --name kku-chatbot kku-chatbot
   ```

5. **Access the Application**:
   - Open your browser and navigate to `http://localhost:8080`.

## Usage
- **Interface**:
  - The chatbot displays a welcome message from KKU IntelliSphere.
  - Type your question in the input box and click "ส่ง" (Send).
  - The app simulates a bot response after a brief delay (demo purposes).
- **Customization**:
  - Edit `App.jsx` to connect to a real AI backend API (e.g., replace the `setTimeout` with an API call).
  - Modify Tailwind classes in components for styling changes.
  - Update `kku-logo.png` and `favicon.ico` for branding.

## Deployment to Production
1. **Push to Docker Registry**:
   ```bash
   docker tag kku-chatbot <your-dockerhub-username>/kku-chatbot:latest
   docker push <your-dockerhub-username>/kku-chatbot:latest
   ```

2. **Deploy on a Server**:
   - Use a cloud provider (e.g., AWS, Azure) or a local server with Docker.
   - Pull the image: `docker pull <your-dockerhub-username>/kku-chatbot:latest`.
   - Run the container with: `docker run -d -p 80:80 <your-dockerhub-username>/kku-chatbot`.

3. **Scaling**:
   - Use Docker Compose or Kubernetes for multi-container setups if integrating with a backend.
   - Configure a reverse proxy (e.g., Nginx) for load balancing if needed.

## Notes
- This is a frontend-only demo. For a functional AI chatbot, integrate with an AI backend (e.g., via KKU IntelliSphere APIs).
- Ensure compliance with KKU's digital policies (refer to digital.kku.ac.th for server usage terms).[](https://digital.kku.ac.th/page/201)
- For production, secure the app with HTTPS and proper CORS settings.

## Troubleshooting
- **Docker Issues**: Ensure Docker is running and ports are free (`docker ps -a` to check).
- **CDN Errors**: Verify internet connectivity for React and Tailwind CDNs.
- **Styling Issues**: Check browser console for Tailwind CSS loading errors.

&copy; 2025 Khon Kaen University. Developed by the Office of Digital Technology.