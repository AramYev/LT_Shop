/* eslint-disable max-classes-per-file */
export class ServiceError extends Error {
    constructor(message, sc) {
        super(message);
        this.status = sc;
        this.location = 'Service';
    }
}

export class RepositoryError extends Error {
    constructor(message, sc) {
        super(message);
        this.status = sc;
        this.location = 'Repository';
    }
}

export class UtilsError extends Error {
    constructor(message, sc) {
        super(message);
        this.status = sc;
        this.location = 'Utils';
    }
}
