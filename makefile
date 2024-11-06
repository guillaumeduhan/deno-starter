run:
	deno fmt && deno run --watch-hmr --allow-write --allow-read --allow-net --allow-env main.ts	

gm:
	git checkout main
	git pull

gt:
	git add .
	git commit -m "commit"
	git push