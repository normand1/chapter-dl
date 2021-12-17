#!/bin/bash

# youtube-dl --youtube-skip-dash-manifest -g  "https://youtu.be/AjELuCHzBnI"
video_url="https://r5---sn-nx5e6nez.googlevideo.com/videoplayback?expire=1635971929&ei=-Z6CYZukBMWrkwb5hr_oCg&ip=199.30.255.165&id=o-AD3jhYfRJvottZ77VYaV1l9gJ_Oa5W6npBvPYdvqGj_o&itag=136&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278&source=youtube&requiressl=yes&mh=iO&mm=31%2C26&mn=sn-nx5e6nez%2Csn-n4v7snl7&ms=au%2Conr&mv=m&mvi=5&pl=21&initcwndbps=1405000&vprv=1&mime=video%2Fmp4&ns=MQA50bhD6GYupg571Q1_E0oG&gir=yes&clen=47860175&dur=299.432&lmt=1606859085070193&mt=1635950230&fvip=5&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5311222&n=gZMag2ocmGwAvaHLf6&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAOmXlCNwGQrCe0utLrjQ5bpv05vRd0ViN4TGNNnpACN0AiAo_clE6VfBL8VFS-vGcXnHo9hiTmM_wlSYZL6u22epjA%3D%3D&sig=AOq0QJ8wRQIgIhlOuSXviCkh5cZbr234aQ8EZaBvBeTZjer2ceziI44CIQCPaSMHn8vGhKQdvx2hHbGZlJNmlXz2x8Ou4rlIsijJdw==&ratebypass=yes"

ffmpeg -ss 01:30 -i "$video_url" -ss 01:35 -ss 30 -t 00:05 -c:v libx264 -c:a aac outputVideo.mkv
ffmpeg -ss 00:00 -i "outputVideo.mkv" -vframes 1 -q:v 2 output.jpg

