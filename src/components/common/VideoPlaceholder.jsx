import { VideoCameraIcon } from '@heroicons/react/24/outline';

const VideoPlaceholder = ({ className = "" }) => {
    return (
        <div className={`video-placeholder w-full h-full bg-gray-800 flex flex-col items-center justify-center text-gray-500 ${className}`}>
            <VideoCameraIcon className="w-12 h-12 mb-2 opacity-50" />
            <span className="font-sans text-sm tracking-widest uppercase">Video Area</span>
        </div>
    );
};

export default VideoPlaceholder;
