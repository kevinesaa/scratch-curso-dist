class PlayListController {
    
    #videoSourceDictionary;
    #videoKeysArray; // dictionary keys as array
    #keyIndexArray; // dictionary keys positions
    
    #currentVideo = {};
    //*
    //* partial item example
    //* {"vid-0":{"id":"vid-0","type":"VIDEO", "title":"example","uri":"./video/video_0.mp4", "captationsUri":"./video/video_0.vtt"} } */
    constructor(videoSourceDictionary) {
        this.setVideoSourceDictionary(videoSourceDictionary)
    }

    setVideoSourceDictionary = (videoSourceDictionary) => {

        // play list 
        this.#videoSourceDictionary = videoSourceDictionary; 
        
        // get dictionary key as array
        this.#videoKeysArray = Object.freeze( Object.keys(videoSourceDictionary) );
        
        //KEY_INDEX_ARRAY
        this.#keyIndexArray = {}; 
        Object.entries( this.#videoKeysArray )
            .forEach( entry => {
                const key = entry[1];
                const value = parseInt(entry[0]);
                this.#keyIndexArray[key] = value;
            });
        
        Object.freeze(this.#keyIndexArray);
        
        this.setCurrentVideoByIndex(0);
        
    }

    getVideoByKeyId = (key) => {
        
        let videoModel = null;
        const length = this.#videoSourceDictionary != null ? Object.keys(this.#videoSourceDictionary).length:0;
        if(length > 0 && this.#videoSourceDictionary.hasOwnProperty(key))
        {
            videoModel = this.#videoSourceDictionary[key];
        }
        
        return videoModel;
    }

    getVideoByIndex = (index) => {

        let videoModel = null;
        const length = this.#videoKeysArray != null ? this.#videoKeysArray.length : 0;
        if( length > 0 && Number.isInteger(index)) {
            
            if(  index >= 0 && index < length ) {

                const key = this.#videoKeysArray[index];
                videoModel = this.#videoSourceDictionary[key];
            }
        }

        return videoModel;
    }

    setCurrentVideoByIndex = (index) => {
        
        const length = this.#videoKeysArray != null ? this.#videoKeysArray.length : 0;
        if( length > 0 && Number.isInteger(index)) {
            
            if(  index >= 0 && index < length ) {

                //lastMenuItemType:null,
                this.#currentVideo.index = index;
                this.#currentVideo.key = this.#videoKeysArray[index];
            }
        }        
    }

    setCurrentVideoByKeyId = (key) => {
        
        const length = this.#keyIndexArray != null ? Object.keys(this.#keyIndexArray).length:0;
        if(length > 0 && this.#keyIndexArray.hasOwnProperty(key))
        {
            //lastMenuItemType:null,
            this.#currentVideo.index = this.#keyIndexArray[key];
            this.#currentVideo.key = key;
        }
    }

    getCurrentIndexObject = () => {
        
        const i = this.#currentVideo.index;
        const k = this.#currentVideo.key;
        return {index:i,key:k};
    }

    getCurrent = () => {
        
        const current = this.getCurrentIndexObject();
        return this.getVideoByKeyId(current.key);
    }
    
    hasPrevius = () => {
        const currentVideo = this.getCurrentIndexObject();
        const newIndex = currentVideo.index - 1;
        return newIndex >= 0;
    }
    
    hasNext = () => {
        const length = this.#videoKeysArray != null ? this.#videoKeysArray.length : 0;
        const currentVideo = this.getCurrentIndexObject();
        const newIndex = currentVideo.index + 1;
        return newIndex <= length - 1;
    }   
    
    moveBackward = () => {

        const currentVideo = this.getCurrentIndexObject();
        let newIndex = currentVideo.index - 1;
        newIndex = Math.max(0,newIndex);
        this.setCurrentVideoByIndex(newIndex);
        return this.getCurrent();
    }

    moveForeward = () => {
        
        const length = this.#videoKeysArray != null ? this.#videoKeysArray.length : 0;
        const currentVideo = this.getCurrentIndexObject();
        let newIndex = currentVideo.index + 1;
        newIndex = Math.min(newIndex, length - 1)
        this.setCurrentVideoByIndex(newIndex);
        return this.getCurrent();
    }
}