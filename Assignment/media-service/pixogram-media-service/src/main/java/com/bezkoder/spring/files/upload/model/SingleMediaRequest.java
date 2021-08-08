package com.bezkoder.spring.files.upload.model;

import java.io.FileReader;

import org.springframework.web.multipart.MultipartFile;

public class SingleMediaRequest {

	private Long userId;
	private String mediaTitle;
	private String desc;
	/*
	 * private String[] tags; private String[] effect;
	 */
	// private MultipartFile file;

	private String fileName;
	/*
	 * private String fileType; private byte[] fileData;
	 */
	// private FileReader fileReader;

	/**
	 * @return the userId
	 */
	public Long getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(Long userId) {
		this.userId = userId;
	}

	/**
	 * @return the mediaTitle
	 */
	public String getMediaTitle() {
		return mediaTitle;
	}

	/**
	 * @param mediaTitle the mediaTitle to set
	 */
	public void setMediaTitle(String mediaTitle) {
		this.mediaTitle = mediaTitle;
	}

	/**
	 * @return the desc
	 */
	public String getDesc() {
		return desc;
	}

	/**
	 * @param desc the desc to set
	 */
	public void setDesc(String desc) {
		this.desc = desc;
	}

	/**
	 * @return the fileName
	 */
	public String getFileName() {
		return fileName;
	}

	/**
	 * @param fileName the fileName to set
	 */
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	}
