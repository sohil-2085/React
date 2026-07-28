import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    let endpoint = config.appwriteUrl?.trim();
    if (!endpoint) {
      endpoint = `${window.location.origin}/v1`;
    }
    if (!endpoint.endsWith("/v1")) {
      endpoint = endpoint.replace(/\/+$/, "") + "/v1";
    }

    this.client.setEndpoint(endpoint).setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      console.log("error while creating the post", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const updatePayload = {
        title,
        content,
        status,
      };

      if (featuredImage !== undefined) {
        updatePayload.featuredImage = featuredImage;
      }

      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        updatePayload,
      );
    } catch (error) {
      console.log("Error while updating the blog", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
      );
      return true;
    } catch (error) {
      console.log("error while deleting post", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
      );
    } catch (error) {
      console.log("error while getting post", error);
      return null;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      console.log("error while getting all post", error);
      return { documents: [] };
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.log("error while uploading file", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("error while deleting file", error);
      return false;
    }
  }

  getFileView(fileId) {
    try {
      const id = fileId?.$id || fileId;

      if (!id) {
        return "";
      }

      return this.bucket.getFileView(config.appwriteBucketId, id);
    } catch (error) {
      console.log("Error while getting file view", error);
      return "";
    }
  }

  getFilePreview(fileId) {
    try {
      const id = fileId?.$id || fileId;

      if (!id) {
        return "";
      }

      return this.bucket.getFilePreview(config.appwriteBucketId, id);
    } catch (error) {
      console.log("Error while getting file preview", error);
      return "";
    }
  }
}

const service = new Service();

export default service;
