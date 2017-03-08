"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(content, username, messageId, userId) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
    return Message;
}());
exports.Message = Message;
