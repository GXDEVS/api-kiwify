FROM densyy/base-node-2025:latest

WORKDIR /home

# ENVS
ARG GITLAB_TOKEN
ENV DIR_REPO=/home/api-kiwify

# API
RUN git clone https://${GITLAB_TOKEN}@gitlab.com/lecdt-hospedagem/backend/api-kiwify.git
RUN rm -rf ${DIR_REPO}/node_modules
RUN rm -rf ${DIR_REPO}/.git
RUN (cd api-kiwify && pnpm install --prod)

ENTRYPOINT node ${DIR_REPO}/app.js
