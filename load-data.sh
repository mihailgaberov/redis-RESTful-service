for f in songs/*
do
  curl -X PUT -H "Content-Type: application/json" -d "@$f" localhost:8081/song
  echo " <- $f"
done