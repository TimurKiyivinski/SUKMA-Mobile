import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Photo = new Mongo.Collection('photos');

Meteor.methods({
    'photo.insert' (buffer) {

        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized')
        }

        Photo.insert({
            data: buffer,
            createdAt: new Date(),
            owner: Meteor.userId(),
        })
    },
    'photo.remove' (photoId) {
        check(photoId, String)
        Photo.remove(photoId)
    }
})
