#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
set -a
source .env
set +a

VOICE_ID="pTOe8BQRdydOEIgv0wFL"
OUT_DIR="public/voiceover"
mkdir -p "$OUT_DIR"

gen() {
  local name="$1"
  local text="$2"
  echo "Generating $name..."
  curl -s -X POST "https://api.elevenlabs.io/v1/text-to-speech/$VOICE_ID" \
    -H "xi-api-key: $ELEVENLABS_API_KEY" \
    -H "Content-Type: application/json" \
    -H "Accept: audio/mpeg" \
    -d "{\"text\":\"$text\",\"model_id\":\"eleven_multilingual_v2\",\"voice_settings\":{\"stability\":0.55,\"similarity_boost\":0.8,\"style\":0.35}}" \
    -o "$OUT_DIR/$name.mp3"
  ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$OUT_DIR/$name.mp3"
}

gen vo1 "你这个烦恼大得很，但细想一下，烦恼到底在哪儿？"
gen vo_reveal "这是一个 Skill，把南怀瑾的智慧和费勇的现代解读，装进你的 AI，陪你把职场焦虑、身份迷茫，一句一句聊透。"
gen vo2 "你不是找不到自己，你是被那些外表的假象给捆住了。有个人拼命证明自己是某某经理，是谁的母亲，是成功人士。这些标签，今天有，明天没，根本不是真正的你。当你不再被名誉、职位，甚至这副皮囊绑架的时候，那个如如不动、彻底自由的本源，就自然显现了。"
gen vo3 "一层，是南怀瑾老先生的金刚经说什么，原文释义，绝不歪曲经义。另一层，是费勇教授的现代比喻，过河拆桥，社会标签，皇帝的新衣。"
gen vo4 "你甚至不用记什么指令，聊天里随口一句压力好大，他就会自己接上话，陪你聊开。"
gen vo5 "一行命令，装进 Claude Code，或者任何支持 Agent Skill 的工具。"

echo "Done."
