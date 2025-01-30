import { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Video } from 'react-native-video';

export function Task33() {
    const vidRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const poster = require('../Images/Task27/3.png');
    const vid = require('../Videos/Task32/cps.mp4');
    const controlsStyles = {
        hidePosition: true,
        hidePlayPause: false,
        hideForward: true,
        hideRewind: true,
        hideNext: true,
        hidePrevious: true,
        hideFullscreen: true,
        hideSeekBar: true,
        hideDuration: true,
        hideNavigationBarOnFullScreenMode: true,
        hideNotificationBarOnFullScreenMode: true,
        hideSettingButton: true,
    };

    function handle_on_press() {
        setIsPlaying(!isPlaying);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handle_on_press}>
                {isPlaying ?
                    <Video
                        ref={vidRef}
                        source={vid}
                        controls
                        controlsStyles={controlsStyles}
                        paused={!isPlaying}
                        style={styles.video}
                    />
                    :
                    <Image
                        source={poster}
                        style={styles.poster}
                    />
                }
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 200,
        padding: 5,
        margin: 3,
    },
    video: {
        width: 330,
        height: 200,
    },
    poster: {
        opacity: 0.6,
        width: 330,
        height: 200,
        resizeMode: 'cover',
    }
});
