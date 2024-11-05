run:
	deno fmt && deno run --watch-hmr --allow-write --allow-read --allow-net --allow-env main.ts	

gt:
	git add .
	git commit -m "commit"
	git push