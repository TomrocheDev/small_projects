import PySimpleGUI as sg
from pytube import YouTube


def download_mp3(link, path):
    youtube_object = YouTube(link)
    youtube_object = youtube_object.streams.get_audio_only()
    try:
        youtube_object.download(path)
        sg.popup("MP3 downloaded successfully!")
    except ConnectionError:
        sg.popup("An error has occurred. Please try again.")


# GUI layout
sg.theme("DarkAmber")

layout = [
    [sg.Text("Convert and download YouTube videos to MP3.")],
    [sg.Text("Enter YouTube link: "), sg.InputText()],
    [sg.Text("Enter folder: "), sg.In(), sg.FolderBrowse()],
    [sg.Button("Download MP3")]
]

window = sg.Window("YouTube to MP3 Downloader", layout)

# Main program
while True:
    event, values = window.read()

    if event:
        user_link = values[0]
        user_path = values[1]
        download_mp3(user_link, user_path)

    if event == sg.WIN_CLOSED:
        break

