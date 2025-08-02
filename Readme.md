Prerequisites





Docker installed on your machine



A KKU logo image (kku-logo.png) and favicon (favicon.ico) in public/



Internet connection for CDN dependencies

Setup





Clone the Repository:

git clone <repository-url>
cd kku-chatbot



Add Assets:





Place kku-logo.png and favicon.ico in the public/ folder.



Ensure the logo is a high-quality PNG of the KKU logo.



Build the Docker Image:

docker build -t kku-chatbot .



Run the Docker Container:

docker run -d -p 8080:80 --name kku-chatbot kku-chatbot



Access the Application:





Open your browser and navigate to http://localhost:8080.

Usage





Interface:





The chatbot displays a welcome message from KKU IntelliSphere.



Type your question in the input box and click "ส่ง" (Send).



The app simulates a bot response after a brief delay (demo purposes).



Customization:





Edit App.jsx to connect to a real AI backend API (e.g., replace the setTimeout with an API call).



Modify Tailwind classes in components for styling changes.



Update kku-logo.png and favicon.ico for branding.

Deployment to Production





Push to Docker Registry:

docker tag kku-chatbot <your-dockerhub-username>/kku-chatbot:latest
docker push <your-dockerhub-username>/kku-chatbot:latest



Deploy on a Server:





Use a cloud provider (e.g., AWS, Azure) or a local server with Docker.



Pull the image: docker pull <your-dockerhub-username>/kku-chatbot:latest.



Run the container with: docker run -d -p 80:80 <your-dockerhub-username>/kku-chatbot.



Scaling:





Use Docker Compose or Kubernetes for multi-container setups if integrating with a backend.



Configure a reverse proxy (e.g., Nginx) for load balancing if needed.

Notes





This is a frontend-only demo. For a functional AI chatbot, integrate with an AI backend (e.g., via KKU IntelliSphere APIs).



Ensure compliance with KKU's digital policies (refer to digital.kku.ac.th for server usage terms).



For production, secure the app with HTTPS and proper CORS settings.

Troubleshooting





Docker Issues: Ensure Docker is running and ports are free (docker ps -a to check).



CDN Errors: Verify internet connectivity for React and Tailwind CDNs.



Styling Issues: Check browser console for Tailwind CSS loading errors.

© 2025 Khon Kaen University. Developed by the Office of Digital Technology.