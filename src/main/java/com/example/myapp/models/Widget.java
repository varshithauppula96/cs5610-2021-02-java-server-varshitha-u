package com.example.myapp.models;

import javax.persistence.*;

@Entity
@Table(name="widgets")
public class Widget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private Integer size;
    private String text;
    private Integer width;
    private Integer height;
    private String topicId;
    public String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Widget() {
    }

    public Widget(Long id, String type, Integer size, String text, Integer width, Integer height, String topicId) {
        this.id = id;
        this.type = type;
        this.size = size;
        this.text = text;
        this.width = width;
        this.height = height;
        this.topicId = topicId;
    }
}

/* create table widget (
       id bigint not null,
        height integer,
        size integer,
        text varchar(255),
        topic_id varchar(255),
        type varchar(255),
        width integer,
        primary key (id)
    )*/

/*
 create table widgets (
       id bigint not null auto_increment,
        height integer,
        size integer,
        text varchar(255),
        topic_id varchar(255),
        type varchar(255),
        width integer,
        primary key (id)
    ) */

/* alter table widgets
       add column name varchar(255)*/