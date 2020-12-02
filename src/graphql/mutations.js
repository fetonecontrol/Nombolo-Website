/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      oldUserPoolId
      name
      bio
      avatar {
        bucket
        region
        key
        uri
      }
      avatarThumbnail {
        bucket
        region
        key
        uri
      }
      avatarUpdatedAt
      userName
      pushKey
      aboutMe
      website
      email
      phone
      address
      age
      locale
      zoneinfo
      birthdate
      createdAt
      updatedAt
      posts {
        nextToken
      }
      asks {
        nextToken
      }
      comments {
        nextToken
      }
      fulfilledAsks {
        nextToken
      }
      notifications {
        title
        body
        origin
        remote
        hasCategory
        viewed
        visibility
        createdAt
        updatedAt
      }
      sentNotifications {
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      oldUserPoolId
      name
      bio
      avatar {
        bucket
        region
        key
        uri
      }
      avatarThumbnail {
        bucket
        region
        key
        uri
      }
      avatarUpdatedAt
      userName
      pushKey
      aboutMe
      website
      email
      phone
      address
      age
      locale
      zoneinfo
      birthdate
      createdAt
      updatedAt
      posts {
        nextToken
      }
      asks {
        nextToken
      }
      comments {
        nextToken
      }
      fulfilledAsks {
        nextToken
      }
      notifications {
        title
        body
        origin
        remote
        hasCategory
        viewed
        visibility
        createdAt
        updatedAt
      }
      sentNotifications {
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      oldUserPoolId
      name
      bio
      avatar {
        bucket
        region
        key
        uri
      }
      avatarThumbnail {
        bucket
        region
        key
        uri
      }
      avatarUpdatedAt
      userName
      pushKey
      aboutMe
      website
      email
      phone
      address
      age
      locale
      zoneinfo
      birthdate
      createdAt
      updatedAt
      posts {
        nextToken
      }
      asks {
        nextToken
      }
      comments {
        nextToken
      }
      fulfilledAsks {
        nextToken
      }
      notifications {
        title
        body
        origin
        remote
        hasCategory
        viewed
        visibility
        createdAt
        updatedAt
      }
      sentNotifications {
        nextToken
      }
    }
  }
`;
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
      id
      initialQuery
      mediaOwnerId
      mediaOwnerUsername
      mediaCreator
      latitude
      longitude
      visibility
      title
      address
      region
      categories
      interests
      description
      type
      file {
        bucket
        region
        key
        uri
      }
      thumbnail {
        bucket
        region
        key
        uri
      }
      potatoThumbnail {
        bucket
        region
        key
        uri
      }
      mediaOwnerAvatar {
        bucket
        region
        key
        uri
      }
      viewCount
      likeCount
      visibleCommentCount
      likes {
        nextToken
      }
      flags {
        nextToken
      }
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      fromMission
      comments {
        nextToken
      }
      likedBy
      flagged
      flaggedBy
      flagDescription
      hdUri
      sdUri
      isLocationPrivacyModeEnabled
    }
  }
`;
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
      id
      initialQuery
      mediaOwnerId
      mediaOwnerUsername
      mediaCreator
      latitude
      longitude
      visibility
      title
      address
      region
      categories
      interests
      description
      type
      file {
        bucket
        region
        key
        uri
      }
      thumbnail {
        bucket
        region
        key
        uri
      }
      potatoThumbnail {
        bucket
        region
        key
        uri
      }
      mediaOwnerAvatar {
        bucket
        region
        key
        uri
      }
      viewCount
      likeCount
      visibleCommentCount
      likes {
        nextToken
      }
      flags {
        nextToken
      }
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      fromMission
      comments {
        nextToken
      }
      likedBy
      flagged
      flaggedBy
      flagDescription
      hdUri
      sdUri
      isLocationPrivacyModeEnabled
    }
  }
`;
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
      id
      initialQuery
      mediaOwnerId
      mediaOwnerUsername
      mediaCreator
      latitude
      longitude
      visibility
      title
      address
      region
      categories
      interests
      description
      type
      file {
        bucket
        region
        key
        uri
      }
      thumbnail {
        bucket
        region
        key
        uri
      }
      potatoThumbnail {
        bucket
        region
        key
        uri
      }
      mediaOwnerAvatar {
        bucket
        region
        key
        uri
      }
      viewCount
      likeCount
      visibleCommentCount
      likes {
        nextToken
      }
      flags {
        nextToken
      }
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      fromMission
      comments {
        nextToken
      }
      likedBy
      flagged
      flaggedBy
      flagDescription
      hdUri
      sdUri
      isLocationPrivacyModeEnabled
    }
  }
`;
export const createMission = /* GraphQL */ `
  mutation CreateMission(
    $input: CreateMissionInput!
    $condition: ModelMissionConditionInput
  ) {
    createMission(input: $input, condition: $condition) {
      id
      address
      title
      categories
      initialQuery
      visibility
      latitude
      longitude
      missionOwnerUsername
      missionOwnerId
      missionClaimerUsername
      missionClaimerId
      status
      onMission
      description
      createdAt
      updatedAt
      experienceId
      likeCount
      visibleCommentCount
      likes {
        nextToken
      }
      flags {
        nextToken
      }
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      fulfiller {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      likedBy
      flagged
      flaggedBy
      flagDescription
    }
  }
`;
export const updateMission = /* GraphQL */ `
  mutation UpdateMission(
    $input: UpdateMissionInput!
    $condition: ModelMissionConditionInput
  ) {
    updateMission(input: $input, condition: $condition) {
      id
      address
      title
      categories
      initialQuery
      visibility
      latitude
      longitude
      missionOwnerUsername
      missionOwnerId
      missionClaimerUsername
      missionClaimerId
      status
      onMission
      description
      createdAt
      updatedAt
      experienceId
      likeCount
      visibleCommentCount
      likes {
        nextToken
      }
      flags {
        nextToken
      }
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      fulfiller {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      likedBy
      flagged
      flaggedBy
      flagDescription
    }
  }
`;
export const deleteMission = /* GraphQL */ `
  mutation DeleteMission(
    $input: DeleteMissionInput!
    $condition: ModelMissionConditionInput
  ) {
    deleteMission(input: $input, condition: $condition) {
      id
      address
      title
      categories
      initialQuery
      visibility
      latitude
      longitude
      missionOwnerUsername
      missionOwnerId
      missionClaimerUsername
      missionClaimerId
      status
      onMission
      description
      createdAt
      updatedAt
      experienceId
      likeCount
      visibleCommentCount
      likes {
        nextToken
      }
      flags {
        nextToken
      }
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      fulfiller {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      likedBy
      flagged
      flaggedBy
      flagDescription
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      mediaId
      missionId
      userId
      commentOwnerId
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      media {
        id
        initialQuery
        mediaOwnerId
        mediaOwnerUsername
        mediaCreator
        latitude
        longitude
        visibility
        title
        address
        region
        categories
        interests
        description
        type
        viewCount
        likeCount
        visibleCommentCount
        createdAt
        updatedAt
        fromMission
        likedBy
        flagged
        flaggedBy
        flagDescription
        hdUri
        sdUri
        isLocationPrivacyModeEnabled
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      message
      createdAt
      updatedAt
      createdBy
      deviceId
      likedBy
      flagged
      flaggedBy
      flagDescription
      visibility
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      mediaId
      missionId
      userId
      commentOwnerId
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      media {
        id
        initialQuery
        mediaOwnerId
        mediaOwnerUsername
        mediaCreator
        latitude
        longitude
        visibility
        title
        address
        region
        categories
        interests
        description
        type
        viewCount
        likeCount
        visibleCommentCount
        createdAt
        updatedAt
        fromMission
        likedBy
        flagged
        flaggedBy
        flagDescription
        hdUri
        sdUri
        isLocationPrivacyModeEnabled
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      message
      createdAt
      updatedAt
      createdBy
      deviceId
      likedBy
      flagged
      flaggedBy
      flagDescription
      visibility
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      mediaId
      missionId
      userId
      commentOwnerId
      user {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      media {
        id
        initialQuery
        mediaOwnerId
        mediaOwnerUsername
        mediaCreator
        latitude
        longitude
        visibility
        title
        address
        region
        categories
        interests
        description
        type
        viewCount
        likeCount
        visibleCommentCount
        createdAt
        updatedAt
        fromMission
        likedBy
        flagged
        flaggedBy
        flagDescription
        hdUri
        sdUri
        isLocationPrivacyModeEnabled
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      message
      createdAt
      updatedAt
      createdBy
      deviceId
      likedBy
      flagged
      flaggedBy
      flagDescription
      visibility
    }
  }
`;
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
      id
      testString
      testBool
      createdAt
      updatedAt
    }
  }
`;
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
      id
      testString
      testBool
      createdAt
      updatedAt
    }
  }
`;
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
      id
      testString
      testBool
      createdAt
      updatedAt
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      likeOwnerId
      likeOwnerUsername
      media {
        id
        initialQuery
        mediaOwnerId
        mediaOwnerUsername
        mediaCreator
        latitude
        longitude
        visibility
        title
        address
        region
        categories
        interests
        description
        type
        viewCount
        likeCount
        visibleCommentCount
        createdAt
        updatedAt
        fromMission
        likedBy
        flagged
        flaggedBy
        flagDescription
        hdUri
        sdUri
        isLocationPrivacyModeEnabled
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      likeOwnerId
      likeOwnerUsername
      media {
        id
        initialQuery
        mediaOwnerId
        mediaOwnerUsername
        mediaCreator
        latitude
        longitude
        visibility
        title
        address
        region
        categories
        interests
        description
        type
        viewCount
        likeCount
        visibleCommentCount
        createdAt
        updatedAt
        fromMission
        likedBy
        flagged
        flaggedBy
        flagDescription
        hdUri
        sdUri
        isLocationPrivacyModeEnabled
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      likeOwnerId
      likeOwnerUsername
      media {
        id
        initialQuery
        mediaOwnerId
        mediaOwnerUsername
        mediaCreator
        latitude
        longitude
        visibility
        title
        address
        region
        categories
        interests
        description
        type
        viewCount
        likeCount
        visibleCommentCount
        createdAt
        updatedAt
        fromMission
        likedBy
        flagged
        flaggedBy
        flagDescription
        hdUri
        sdUri
        isLocationPrivacyModeEnabled
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFlag = /* GraphQL */ `
  mutation CreateFlag(
    $input: CreateFlagInput!
    $condition: ModelFlagConditionInput
  ) {
    createFlag(input: $input, condition: $condition) {
      id
      flagOwnerId
      flagOwnerUsername
      media {
        id
        initialQuery
        mediaOwnerId
        mediaOwnerUsername
        mediaCreator
        latitude
        longitude
        visibility
        title
        address
        region
        categories
        interests
        description
        type
        viewCount
        likeCount
        visibleCommentCount
        createdAt
        updatedAt
        fromMission
        likedBy
        flagged
        flaggedBy
        flagDescription
        hdUri
        sdUri
        isLocationPrivacyModeEnabled
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      flaggedBy
      flagDescription
      flaggedMediaUri
      description
      flagCount
      createdAt
      updatedAt
    }
  }
`;
export const updateFlag = /* GraphQL */ `
  mutation UpdateFlag(
    $input: UpdateFlagInput!
    $condition: ModelFlagConditionInput
  ) {
    updateFlag(input: $input, condition: $condition) {
      id
      flagOwnerId
      flagOwnerUsername
      media {
        id
        initialQuery
        mediaOwnerId
        mediaOwnerUsername
        mediaCreator
        latitude
        longitude
        visibility
        title
        address
        region
        categories
        interests
        description
        type
        viewCount
        likeCount
        visibleCommentCount
        createdAt
        updatedAt
        fromMission
        likedBy
        flagged
        flaggedBy
        flagDescription
        hdUri
        sdUri
        isLocationPrivacyModeEnabled
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      flaggedBy
      flagDescription
      flaggedMediaUri
      description
      flagCount
      createdAt
      updatedAt
    }
  }
`;
export const deleteFlag = /* GraphQL */ `
  mutation DeleteFlag(
    $input: DeleteFlagInput!
    $condition: ModelFlagConditionInput
  ) {
    deleteFlag(input: $input, condition: $condition) {
      id
      flagOwnerId
      flagOwnerUsername
      media {
        id
        initialQuery
        mediaOwnerId
        mediaOwnerUsername
        mediaCreator
        latitude
        longitude
        visibility
        title
        address
        region
        categories
        interests
        description
        type
        viewCount
        likeCount
        visibleCommentCount
        createdAt
        updatedAt
        fromMission
        likedBy
        flagged
        flaggedBy
        flagDescription
        hdUri
        sdUri
        isLocationPrivacyModeEnabled
      }
      mission {
        id
        address
        title
        categories
        initialQuery
        visibility
        latitude
        longitude
        missionOwnerUsername
        missionOwnerId
        missionClaimerUsername
        missionClaimerId
        status
        onMission
        description
        createdAt
        updatedAt
        experienceId
        likeCount
        visibleCommentCount
        likedBy
        flagged
        flaggedBy
        flagDescription
      }
      flaggedBy
      flagDescription
      flaggedMediaUri
      description
      flagCount
      createdAt
      updatedAt
    }
  }
`;
export const createNewNotification = /* GraphQL */ `
  mutation CreateNewNotification(
    $input: CreateNewNotificationInput!
    $condition: ModelNewNotificationConditionInput
  ) {
    createNewNotification(input: $input, condition: $condition) {
      id
      body
      fromUserId
      fromUserUsername
      fromUser {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      notificationOwnerId
      notificationItemId
      type
      viewed
      visibility
      createdAt
      updatedAt
    }
  }
`;
export const updateNewNotification = /* GraphQL */ `
  mutation UpdateNewNotification(
    $input: UpdateNewNotificationInput!
    $condition: ModelNewNotificationConditionInput
  ) {
    updateNewNotification(input: $input, condition: $condition) {
      id
      body
      fromUserId
      fromUserUsername
      fromUser {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      notificationOwnerId
      notificationItemId
      type
      viewed
      visibility
      createdAt
      updatedAt
    }
  }
`;
export const deleteNewNotification = /* GraphQL */ `
  mutation DeleteNewNotification(
    $input: DeleteNewNotificationInput!
    $condition: ModelNewNotificationConditionInput
  ) {
    deleteNewNotification(input: $input, condition: $condition) {
      id
      body
      fromUserId
      fromUserUsername
      fromUser {
        id
        oldUserPoolId
        name
        bio
        avatarUpdatedAt
        userName
        pushKey
        aboutMe
        website
        email
        phone
        address
        age
        locale
        zoneinfo
        birthdate
        createdAt
        updatedAt
      }
      notificationOwnerId
      notificationItemId
      type
      viewed
      visibility
      createdAt
      updatedAt
    }
  }
`;
