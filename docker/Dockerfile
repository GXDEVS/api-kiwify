FROM densyy/base-node-2025:latest

WORKDIR /home

# ENVS
ARG GITHUB_TOKEN
ENV DIR_REPO=/home/api-kiwify

# API
RUN git clone https://${GITHUB_TOKEN}@github.com/eduardolecdt/api-kiwify.git
RUN rm -rf ${DIR_REPO}/node_modules
RUN rm -rf ${DIR_REPO}/.git
RUN (cd api-kiwify && pnpm install --prod)

ENTRYPOINT node ${DIR_REPO}/app.js
