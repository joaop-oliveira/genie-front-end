FROM node:10.11

RUN apt-get update && apt-get install -y  libgtk2.0-0   libnotify-dev   libgconf-2-4   libnss3   libxss1   libasound2   xvfb


RUN cd /home
RUN ls -lh
RUN sleep 10s

# versions of local tools
RUN node -v
RUN npm -v
RUN yarn -v
RUN mkdir /.cache
RUN chmod 777 /.cache
RUN mkdir /.yarn
RUN chmod 777 /.yarn
#RUN cd ~ && mkdir .npm-global
#RUN npm config set prefix ~/.npm-global
#RUN echo export PATH="~/.npm-global/bin:$PATH" >> ~/.bashrc
#RUN source .bashrc
#RUN exec $SHELL
#RUN pwd
