import 'package:withings_flutter/src/data/withingsData.dart';

/// [WithingsSleepGetData] is a class that returns sleep data captured at high frequency, including sleep stages
class WithingsSleepGetData implements WithingsData {
  /// Response status
  int? status;

  /// Response data
  BodySleepGet? body;

  /// Default [WithingsSleepGetData] constructor
  WithingsSleepGetData({this.status, this.body});

  factory WithingsSleepGetData.fromJson(Map<String, dynamic> json) {
    return WithingsSleepGetData(
      status: json['status'],
      body: json['body'] != null ? BodySleepGet.fromJson(json['body']) : null,
    );
  }

  @override
  Map<String, dynamic> toJson<T extends WithingsData>() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['status'] = status;
    if (body != null) {
      data['body'] = body!.toJson();
    }
    return data;
  }

  @override
  String toString() {
    return (StringBuffer('WithingsSleepGetData(')
          ..write('status: $status, ')
          ..write('body: $body, ')
          ..write(')'))
        .toString();
  }
}

class BodySleepGet {
  /// Object SeriesSleepGet
  List<SeriesSleepGet>? series;

  BodySleepGet({this.series});

  BodySleepGet.fromJson(Map<String, dynamic> json) {
    if (json['series'].isNotEmpty) {
      series = <SeriesSleepGet>[];
      json['series'].forEach((v) {
        series!.add(SeriesSleepGet.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (series != null) {
      data['series'] = series!.map((v) => v.toJson()).toList();
    }
    return data;
  }

  @override
  String toString() {
    return (StringBuffer('BodySleepGet(')
          ..write('series: $series, ')
          ..write(')'))
        .toString();
  }
}

class SeriesSleepGet {
  /// The starting datetime for the sleep state data
  int? startdate;

  /// The end datetime for the sleep data. A single call can span up to 7 days maximum.
  /// To cover a wider time range, you will need to perform multiple calls.
  int? enddate;

  /// The state of sleeping
  int? state;

  /// Device model
  String? model;
  int? modelId;

  /// Object (Heart rate)
  ObjSleepGet? hr;

  /// Object (Respiration Rate)
  ObjSleepGet? rr;

  /// Object (Total snoring time)
  ObjSleepGet? snoring;

  /// Object (Heart rate variability - Standard deviation of the NN over 1 minute)
  ObjSleepGet? sdnn1;

  /// Object (Heart rate variability - Root mean square of the successive differences over "a few seconds")
  ObjSleepGet? rmssd;

  SeriesSleepGet(
      {this.startdate,
      this.enddate,
      this.state,
      this.model,
      this.modelId,
      this.hr,
      this.rr,
      this.snoring,
      this.sdnn1,
      this.rmssd});

  SeriesSleepGet.fromJson(Map<String, dynamic> json) {
    startdate = json['startdate'];
    enddate = json['enddate'];
    state = json['state'];
    model = json['model'];
    modelId = json['model_id'];
    hr = json['hr'] != null ? ObjSleepGet.fromJson(json['hr']) : null;
    rr = json['rr'] != null ? ObjSleepGet.fromJson(json['rr']) : null;
    snoring =
        json['snoring'] != null ? ObjSleepGet.fromJson(json['snoring']) : null;
    sdnn1 =
        json['sdnn_1'] != null ? ObjSleepGet.fromJson(json['sdnn_1']) : null;
    rmssd = json['rmssd'] != null ? ObjSleepGet.fromJson(json['rmssd']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['startdate'] = startdate;
    data['enddate'] = enddate;
    data['state'] = state;
    data['model'] = model;
    data['model_id'] = modelId;
    if (hr != null) {
      data['hr'] = hr!.toJson();
    }
    if (rr != null) {
      data['rr'] = rr!.toJson();
    }
    if (snoring != null) {
      data['snoring'] = snoring!.toJson();
    }
    if (sdnn1 != null) {
      data['sdnn_1'] = sdnn1!.toJson();
    }
    if (rmssd != null) {
      data['rmssd'] = rmssd!.toJson();
    }
    return data;
  }

  @override
  String toString() {
    return (StringBuffer('SeriesSleepGet(')
          ..write('startdate: $startdate, ')
          ..write('enddate: $enddate, ')
          ..write('state: $state, ')
          ..write('model: $model, ')
          ..write('model_id: $modelId, ')
          ..write('hr: $hr, ')
          ..write('rr: $rr, ')
          ..write('snoring: $snoring, ')
          ..write('sdnn_1: $sdnn1, ')
          ..write('rmssd: $rmssd, ')
          ..write(')'))
        .toString();
  }
}

class ObjSleepGet {
  /// Timestamp
  int? timestamp;

  ObjSleepGet({this.timestamp});

  ObjSleepGet.fromJson(Map<String, dynamic> json) {
    timestamp = json['$timestamp'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['$timestamp'] = timestamp;
    return data;
  }

  @override
  String toString() {
    return (StringBuffer('ObjSleepGet(')
          ..write('timestamp: $timestamp, ')
          ..write(')'))
        .toString();
  }
}