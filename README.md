
# Dubbing Interface

This is a dubbing interface project that allows users to play a video, record audio, and synchronize both for playback, a video player with a progress bar for seeking, audio recording capabilities, and synchronized playback of both video and recorded audio. The project uses React, TailwindCSS, and WaveSurfer.js for audio visualization.

## Features

- Video Player: Play and pause video with a progress bar for seeking.
- Audio Recorder*: Record audio using the browser's microphone and display a waveform.
- Synchronization: Play recorded audio and video simultaneously with synchronized playback.
- Dialogue Section: Display original and translated dialogues with options to navigate between them.
- Error Handling: Basic error handling for audio/video playback issues.

## Project Structure

```
/dubbing-interface
├── /public
│   ├── sample-video.mp4
│   └── index.html
├── /src
│   ├── /components
│   │   ├── AudioRecorder.js
│   │   ├── Dialogue.js
│   │   ├── SyncButton.js
│   │   ├── VideoPlayer.js
│   │   └── Waveform.js
│   ├── /context
│   │   └── DialogueContext.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── package.json
└── package-lock.json
```

## Getting Started

Follow these instructions to run the project on your local machine.

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dubbing-interface.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd dubbing-interface
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

### Build for Production

To create a production-ready build of the application:

```bash
npm run build
```

The build files will be output to the `/build` folder.

## Usage

### Video Player

- The video player allows you to play/pause a video and seek through the video using the progress bar. Place a `sample-video.mp4` in the `/public` folder.

### Audio Recorder

- Start and stop audio recording using your microphone by clicking the "Start Recording" button.
- A waveform is displayed after recording, allowing you to play back the recorded audio.

### Sync Playback

- After recording the audio, you can use the "Play Synchronized Audio and Video" button to play both the video and recorded audio in sync.

### Dialogue Section

- The `Dialogue` component displays original and translated dialogues.
- Navigate between dialogues using the "Next Dialogue" button.

## Built With

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for responsive design
- [WaveSurfer.js](https://wavesurfer-js.org/) - A JavaScript library for creating interactive waveforms

## Contributing

Feel free to submit issues and pull requests to improve the project. Contributions are always welcome.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Special thanks to the creators of React, TailwindCSS, and WaveSurfer.js for their awesome libraries.
