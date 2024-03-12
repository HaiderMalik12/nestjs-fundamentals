import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { AudioConvertedEvent } from './events/audio-converted-event';

@Injectable()
export class AudioConvertedListener {
  @OnEvent('audio.converted') // We have registered a new event lister with audio.converted name
  handleAudioConvertedEvent(event: AudioConvertedEvent) {
    //We have to create the type for the AudioConvertedEvent
    console.log(event);
    // Here you can have your EmailService method you can call here
    console.log(
      'Notification has sent to user that file is converted successfully',
    );
  }
}
