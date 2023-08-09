import json
import torchaudio
from audiocraft.models import AudioGen
from audiocraft.data.audio import audio_write

model = AudioGen.get_pretrained('facebook/audiogen-medium')
model.set_generation_params(duration=5)

with open("prompt.json", 'r') as file:
    data_dict = json.load(file)

# Access the "prompt" array from the dictionary
descriptions = data_dict["prompt"]
descriptions = [item for item in descriptions if len(item) > 0]

#descriptions = ['walking through snow', 'rainy day at a streetside cafe', 'bowling alley', 'a guy making a satisfied sound while eating']
wav = model.generate(descriptions)  # generates 3 samples.

for idx, one_wav in enumerate(wav):
    # Will save under {idx}.wav, with loudness normalization at -14 db LUFS.
    audio_write(f'{idx}', one_wav.cpu(), model.sample_rate, strategy="loudness", loudness_compressor=True)
