deploy:
    firebase deploy --non-interactive --token "1/0KbS9bOLiZMA_S_g5cl9szWeF4uYe-05Wp_GrimBWPo" --project "projectid"
serve:
    firebase serve
watch:
    git-watch --url=https://github.com/livelybug/SimpleDomGame --push-execute='make push-%ref% || true'
push-refs/heads/master:
    git pull
    make deploy