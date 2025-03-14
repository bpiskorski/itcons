FROM ubuntu:latest
ARG NODE_VERSION=23.2.0

RUN apt-get update && \
    apt-get install -y curl \
    ansible \
    ssh \
    python3-pip \
    python3-venv \
    && apt-get clean

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
ENV NVM_DIR=/root/.nvm

RUN bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION"
WORKDIR /app
COPY . /app
RUN bash -c "source $NVM_DIR/nvm.sh && cd /app && npm install"

EXPOSE 3000

#ENTRYPOINT ["bash", "-c", "source $NVM_DIR/nvm.sh && exec \"$@\"", "--"]
#CMD ["/bin/bash"]   
CMD ["bash", "-c", "source $NVM_DIR/nvm.sh && npm start"]