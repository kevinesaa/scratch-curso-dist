
const VIDEO_SOURCE_LIST = {};
Object.entries(MENU)
    .filter(entry => entry[1].hasOwnProperty('items'))
    .flatMap(key => key[1].items)
    .filter(item => item.type == menuOptionEntryTypes.video)    
    .forEach(v => VIDEO_SOURCE_LIST[v.id] = v);

Object.freeze(VIDEO_SOURCE_LIST);

const VIDEO_KEYS_ARRAY = Object.freeze( Object.keys(VIDEO_SOURCE_LIST) );

const KEY_INDEX_ARRAY = {}; 
Object.entries(VIDEO_KEYS_ARRAY)
    .forEach( entry => {
        const key = entry[1];
        const value = parseInt(entry[0]);
        KEY_INDEX_ARRAY[key] = value;
    });
Object.freeze(KEY_INDEX_ARRAY);

const currentVideo = {
    lastMenuItemType:null,
    index:0,
    key:VIDEO_KEYS_ARRAY[0]
};

function onInitVideoPlayer() 
{
    playButton.onclick = () => {
        
        if(!videoPlayer.src) 
        {
            playVideoById(currentVideo.key);
        }
        else 
        {
            if(videoPlayer.paused || videoPlayer.ended) 
            {
                videoPlayer.play();
                //todo chance play icon to pause icon   
            }
            else 
            {
                pause();
            }
        }
       
    }

    checkIfHidePreviusButton();
    checkIfHideNextButton();
    goToPreviusVideoButton.onclick = previusVideo;
    goToNextVideoButton.onclick = nextVideo;
    videoSubtitleButton.onclick = onSubtitleClickButton;
    videoPlayer.addEventListener('loadedmetadata', setVideoDuration);
    videoPlayer.addEventListener('timeupdate', updateCurrentTimeView);
    START_SESSION_EVENT_BUS.subscribe(videoControlOnStartSession);
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(videoControlOnSelectItemMenuListener);
}

function videoControlOnStartSession(session)
{
    const index = (session && session.videoId)?KEY_INDEX_ARRAY[session.videoId]:0;
    
    if(Number.isInteger(index))
    {
        const key = VIDEO_KEYS_ARRAY[index];
        const video = VIDEO_SOURCE_LIST[key];
        currentVideo.key = key;
        currentVideo.index = index;
        videoPlayer.src = video.uri;
        videoCaptations.src = video.captationsUri;
    }
}

function videoControlOnSelectItemMenuListener(menuItem) 
{

    if(menuItem.type == menuOptionEntryTypes.video) 
    {
        if(menuItem.id != currentVideo.key) 
        {
            playVideoByIdSilently(menuItem.id);
        }
        else 
        {
            if(currentVideo.lastMenuItemType != menuOptionEntryTypes.video)
            {
                videoPlayer.currentTime = 0;
                videoPlayer.play();
                //todo chance play icon to pause icon
            }
        }
    }
    else 
    {
        currentVideo.lastMenuItemType = menuItem.type;
        pause();
    }
}

function formatVideoTime(time) 
{
    const minute = Math.floor(time / 60);
    const seconds = Math.floor(time - (minute * 60));
    const m = minute >= 10 ? minute : "0" + minute;
    const s = seconds >= 10 ? seconds : "0" + seconds;
    return { minute:m, seconds:s};
}

function setVideoDuration() 
{
    const timeFormated = formatVideoTime(videoPlayer.duration);
    videoDurationDisplay.innerText = timeFormated.minute + ":" + timeFormated.seconds;
    //todo add and update progress bar
}

function updateCurrentTimeView() 
{
    const timeFormated = formatVideoTime(videoPlayer.currentTime);
    videoCurrentTimeDisplay.innerText = timeFormated.minute + ":" + timeFormated.seconds;
    //todo add and update progress bar
}

function onSubtitleClickButton() 
{
    const captationShowState = 'showing';
    const captationHideState = 'hidden';
    const track = videoPlayer.textTracks[0];
    if(track.mode == captationShowState) 
    {
        track.mode = captationHideState;
    }
    else
    {
        track.mode = captationShowState;
    }
    
}

function previusVideo() 
{
    console.log(" h ")
    const p = currentVideo.index - 1;
    const key = VIDEO_KEYS_ARRAY[p];
    playVideoById(key);
}

function nextVideo() {
    console.log(" m ")
    const n = currentVideo.index + 1;
    const key = VIDEO_KEYS_ARRAY[n];
    playVideoById(key);
}

function playVideoByIdSilently(videoId) 
{    
    const index = KEY_INDEX_ARRAY[videoId];
    
    if(Number.isInteger(index) && index != currentVideo.index) {
        const video = VIDEO_SOURCE_LIST[videoId];
        currentVideo.index = index;
        currentVideo.key = videoId;
        videoPlayer.pause();
        videoPlayer.src = video.uri;
        videoCaptations.src = video.captationsUri;
        videoPlayer.currentTime = 0;
        videoPlayer.play();
        //todo chance play icon to pause icon
        checkIfHidePreviusButton();
        checkIfHideNextButton();
    }
}

function playVideoById(videoId) 
{
    const index = KEY_INDEX_ARRAY[videoId];
    if(Number.isInteger(index) && index != currentVideo.index) 
    {
        playVideoByIdSilently(videoId);
        const video = VIDEO_SOURCE_LIST[videoId];
        VIDEO_PLAYER_EVENT_BUS.dispatch(video);
    }
}

function pause() 
{
    videoPlayer.pause();
    //todo chance pause icon to play icon
}


function checkIfHidePreviusButton() 
{
    goToPreviusVideoButton.style.display = previusVideoButtonDisplayClass;
    const p = currentVideo.index - 1;
    
    if(currentVideo.index <= 0 || !Number.isInteger(currentVideo.index)) 
    {
        currentVideo.index = 0;
        currentVideo.key = VIDEO_KEYS_ARRAY[0];
    }
    
    if(currentVideo.index <= 0 || p < 0) 
    {
        //Issue the html is not hidding
        goToPreviusVideoButton.style.display = hideStyleClass;
    }
}

function checkIfHideNextButton() 
{
    goToNextVideoButton.style.display = nextVideoButtonDisplayClass;
    const last = VIDEO_KEYS_ARRAY.length - 1;
    const n = currentVideo.index + 1;
    if(currentVideo.index >= last || !Number.isInteger(currentVideo.index)) 
    {
        currentVideo.index = last;
        currentVideo.key = VIDEO_KEYS_ARRAY[last];
    }
    
    if(currentVideo.index >= last || n > last) 
    {
        //Issue the html is not hidding
        goToNextVideoButton.style.display = hideStyleClass;
    }
}