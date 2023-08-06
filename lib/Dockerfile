FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Mehar-Zubi/Open-AI /root/Mehar-Zubi
WORKDIR /root/Mehar-Zubi/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
