// SAMPLE
this.manifest = {
    "name": "Kiss Autoplay",
    "icon": "../../icons/icon48.png",
    "settings": [
        {
            "tab": i18n.get('settings'),
            "group": i18n.get('autoplay'),
            "name": "autoplay",
            "type": "checkbox",
            "label": "Enable Autoplay"
        },
        {
            "tab": i18n.get('settings'),
            "group": i18n.get('autoplay'),
            "name": "autoplay_description",
            "type": "description",
            "text": "Automatically plays the next episode."
        },
        {
            "tab": i18n.get('settings'),
            "group": i18n.get('fullscreen'),
            "name": "fullscreen",
            "type": "checkbox",
            "label": "Enable fullscreen"
        },
        {
            "tab": i18n.get('settings'),
            "group": i18n.get('fullscreen'),
            "name": "fullscreen_description",
            "type": "description",
            "text": "Automatically fullscreens the video (Fake fullscreen will fill the window)."
        },
        {
            "tab": i18n.get('settings'),
            "group": i18n.get('fullscreen'),
            "name": "fullscreen_stretch",
            "type": "checkbox",
            "label": "Stretch fullscreen"
        },
        {
            "tab": i18n.get('settings'),
            "group": i18n.get('fullscreen'),
            "name": "fullscreen_stretch_description",
            "type": "description",
            "text": "Stretches to video to fill the screen."
        },
        {
            "tab": i18n.get('settings'),
            "group": i18n.get('save_volume'),
            "name": "save_volume",
            "type": "checkbox",
            "label": "Remember volume"
        },
        {
            "tab": i18n.get('settings'),
            "group": i18n.get('save_volume'),
            "name": "fullscreen_description",
            "type": "description",
            "text": "Remembers the volume of the player when changed"
        },
        {
            "tab": i18n.get('settings'),
            "group": i18n.get('stutter_fix'),
            "name": "stutter_fix",
            "type": "checkbox",
            "label": "Fix stuttering"
        },
        {
            "tab": i18n.get('settings'),
            "group": i18n.get('stutter_fix'),
            "name": "stutter_fix_description",
            "type": "description",
            "text": "May fix stuttering and buffering for some people?"
        },
    ],
    "alignment": [
    ]
};
